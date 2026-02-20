import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3020 } from "./fragment3020";
import type { FragmentToken3021 } from "./fragment3021";

export const FRAGMENT_3022 = gql(`
  fragment Fragment3022 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult3022 = ResultOf<typeof FRAGMENT_3022>;
type FragmentSelf3022 = NonNullable<FragmentResult3022>;

export type FragmentToken3022 =
  | FragmentSelf3022["__typename"]
  | FragmentSelf3022["typenameHint"] | FragmentToken3020 | FragmentToken3021;
