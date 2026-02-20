import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken642 } from "./fragment642";
import type { FragmentToken643 } from "./fragment643";

export const FRAGMENT_644 = gql(`
  fragment Fragment644 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult644 = ResultOf<typeof FRAGMENT_644>;
type FragmentSelf644 = NonNullable<FragmentResult644>;

export type FragmentToken644 =
  | FragmentSelf644["__typename"]
  | FragmentSelf644["typenameHint"] | FragmentToken642 | FragmentToken643;
