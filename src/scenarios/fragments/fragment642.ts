import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken640 } from "./fragment640";
import type { FragmentToken641 } from "./fragment641";

export const FRAGMENT_642 = gql(`
  fragment Fragment642 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult642 = ResultOf<typeof FRAGMENT_642>;
type FragmentSelf642 = NonNullable<FragmentResult642>;

export type FragmentToken642 =
  | FragmentSelf642["__typename"]
  | FragmentSelf642["typenameHint"] | FragmentToken640 | FragmentToken641;
