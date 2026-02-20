import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken361 } from "./fragment361";
import type { FragmentToken362 } from "./fragment362";

export const FRAGMENT_363 = gql(`
  fragment Fragment363 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult363 = ResultOf<typeof FRAGMENT_363>;
type FragmentSelf363 = NonNullable<FragmentResult363>;

export type FragmentToken363 =
  | FragmentSelf363["__typename"]
  | FragmentSelf363["typenameHint"] | FragmentToken361 | FragmentToken362;
