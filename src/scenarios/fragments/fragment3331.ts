import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3329 } from "./fragment3329";
import type { FragmentToken3330 } from "./fragment3330";

export const FRAGMENT_3331 = gql(`
  fragment Fragment3331 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult3331 = ResultOf<typeof FRAGMENT_3331>;
type FragmentSelf3331 = NonNullable<FragmentResult3331>;

export type FragmentToken3331 =
  | FragmentSelf3331["__typename"]
  | FragmentSelf3331["typenameHint"] | FragmentToken3329 | FragmentToken3330;
