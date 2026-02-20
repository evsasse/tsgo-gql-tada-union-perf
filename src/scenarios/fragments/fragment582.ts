import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken580 } from "./fragment580";
import type { FragmentToken581 } from "./fragment581";

export const FRAGMENT_582 = gql(`
  fragment Fragment582 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult582 = ResultOf<typeof FRAGMENT_582>;
type FragmentSelf582 = NonNullable<FragmentResult582>;

export type FragmentToken582 =
  | FragmentSelf582["__typename"]
  | FragmentSelf582["typenameHint"] | FragmentToken580 | FragmentToken581;
