import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken826 } from "./fragment826";
import type { FragmentToken827 } from "./fragment827";

export const FRAGMENT_828 = gql(`
  fragment Fragment828 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult828 = ResultOf<typeof FRAGMENT_828>;
type FragmentSelf828 = NonNullable<FragmentResult828>;

export type FragmentToken828 =
  | FragmentSelf828["__typename"]
  | FragmentSelf828["typenameHint"] | FragmentToken826 | FragmentToken827;
