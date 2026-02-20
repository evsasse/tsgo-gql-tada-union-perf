import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken028 } from "./fragment028";
import type { FragmentToken029 } from "./fragment029";

export const FRAGMENT_030 = gql(`
  fragment Fragment030 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult030 = ResultOf<typeof FRAGMENT_030>;
type FragmentSelf030 = NonNullable<FragmentResult030>;

export type FragmentToken030 =
  | FragmentSelf030["__typename"]
  | FragmentSelf030["typenameHint"] | FragmentToken028 | FragmentToken029;
