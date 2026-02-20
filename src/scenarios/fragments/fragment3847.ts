import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3845 } from "./fragment3845";
import type { FragmentToken3846 } from "./fragment3846";

export const FRAGMENT_3847 = gql(`
  fragment Fragment3847 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult3847 = ResultOf<typeof FRAGMENT_3847>;
type FragmentSelf3847 = NonNullable<FragmentResult3847>;

export type FragmentToken3847 =
  | FragmentSelf3847["__typename"]
  | FragmentSelf3847["typenameHint"] | FragmentToken3845 | FragmentToken3846;
