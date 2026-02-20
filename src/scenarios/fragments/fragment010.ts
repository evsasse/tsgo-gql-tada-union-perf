import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken008 } from "./fragment008";
import type { FragmentToken009 } from "./fragment009";

export const FRAGMENT_010 = gql(`
  fragment Fragment010 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult010 = ResultOf<typeof FRAGMENT_010>;
type FragmentSelf010 = NonNullable<FragmentResult010>;

export type FragmentToken010 =
  | FragmentSelf010["__typename"]
  | FragmentSelf010["typenameHint"] | FragmentToken008 | FragmentToken009;
