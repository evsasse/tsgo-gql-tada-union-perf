import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken641 } from "./fragment641";
import type { FragmentToken642 } from "./fragment642";

export const FRAGMENT_643 = gql(`
  fragment Fragment643 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult643 = ResultOf<typeof FRAGMENT_643>;
type FragmentSelf643 = NonNullable<FragmentResult643>;

export type FragmentToken643 =
  | FragmentSelf643["__typename"]
  | FragmentSelf643["typenameHint"] | FragmentToken641 | FragmentToken642;
