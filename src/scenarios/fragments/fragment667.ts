import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken665 } from "./fragment665";
import type { FragmentToken666 } from "./fragment666";

export const FRAGMENT_667 = gql(`
  fragment Fragment667 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult667 = ResultOf<typeof FRAGMENT_667>;
type FragmentSelf667 = NonNullable<FragmentResult667>;

export type FragmentToken667 =
  | FragmentSelf667["__typename"]
  | FragmentSelf667["typenameHint"] | FragmentToken665 | FragmentToken666;
