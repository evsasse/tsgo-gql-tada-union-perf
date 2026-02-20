import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken666 } from "./fragment666";
import type { FragmentToken667 } from "./fragment667";

export const FRAGMENT_668 = gql(`
  fragment Fragment668 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult668 = ResultOf<typeof FRAGMENT_668>;
type FragmentSelf668 = NonNullable<FragmentResult668>;

export type FragmentToken668 =
  | FragmentSelf668["__typename"]
  | FragmentSelf668["typenameHint"] | FragmentToken666 | FragmentToken667;
