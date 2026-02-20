import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken972 } from "./fragment972";
import type { FragmentToken973 } from "./fragment973";

export const FRAGMENT_974 = gql(`
  fragment Fragment974 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult974 = ResultOf<typeof FRAGMENT_974>;
type FragmentSelf974 = NonNullable<FragmentResult974>;

export type FragmentToken974 =
  | FragmentSelf974["__typename"]
  | FragmentSelf974["typenameHint"] | FragmentToken972 | FragmentToken973;
