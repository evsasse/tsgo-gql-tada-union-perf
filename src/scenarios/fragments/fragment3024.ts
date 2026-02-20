import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3022 } from "./fragment3022";
import type { FragmentToken3023 } from "./fragment3023";

export const FRAGMENT_3024 = gql(`
  fragment Fragment3024 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult3024 = ResultOf<typeof FRAGMENT_3024>;
type FragmentSelf3024 = NonNullable<FragmentResult3024>;

export type FragmentToken3024 =
  | FragmentSelf3024["__typename"]
  | FragmentSelf3024["typenameHint"] | FragmentToken3022 | FragmentToken3023;
