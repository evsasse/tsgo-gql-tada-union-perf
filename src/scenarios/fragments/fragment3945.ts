import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3943 } from "./fragment3943";
import type { FragmentToken3944 } from "./fragment3944";

export const FRAGMENT_3945 = gql(`
  fragment Fragment3945 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult3945 = ResultOf<typeof FRAGMENT_3945>;
type FragmentSelf3945 = NonNullable<FragmentResult3945>;

export type FragmentToken3945 =
  | FragmentSelf3945["__typename"]
  | FragmentSelf3945["typenameHint"] | FragmentToken3943 | FragmentToken3944;
