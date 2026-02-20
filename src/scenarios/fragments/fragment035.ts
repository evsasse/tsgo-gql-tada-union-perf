import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken033 } from "./fragment033";
import type { FragmentToken034 } from "./fragment034";

export const FRAGMENT_035 = gql(`
  fragment Fragment035 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult035 = ResultOf<typeof FRAGMENT_035>;
type FragmentSelf035 = NonNullable<FragmentResult035>;

export type FragmentToken035 =
  | FragmentSelf035["__typename"]
  | FragmentSelf035["typenameHint"] | FragmentToken033 | FragmentToken034;
