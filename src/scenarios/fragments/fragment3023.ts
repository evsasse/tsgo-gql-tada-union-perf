import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3021 } from "./fragment3021";
import type { FragmentToken3022 } from "./fragment3022";

export const FRAGMENT_3023 = gql(`
  fragment Fragment3023 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult3023 = ResultOf<typeof FRAGMENT_3023>;
type FragmentSelf3023 = NonNullable<FragmentResult3023>;

export type FragmentToken3023 =
  | FragmentSelf3023["__typename"]
  | FragmentSelf3023["typenameHint"] | FragmentToken3021 | FragmentToken3022;
