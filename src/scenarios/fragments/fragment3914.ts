import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3912 } from "./fragment3912";
import type { FragmentToken3913 } from "./fragment3913";

export const FRAGMENT_3914 = gql(`
  fragment Fragment3914 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult3914 = ResultOf<typeof FRAGMENT_3914>;
type FragmentSelf3914 = NonNullable<FragmentResult3914>;

export type FragmentToken3914 =
  | FragmentSelf3914["__typename"]
  | FragmentSelf3914["typenameHint"] | FragmentToken3912 | FragmentToken3913;
