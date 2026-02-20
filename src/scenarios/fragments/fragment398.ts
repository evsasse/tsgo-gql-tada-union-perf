import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken396 } from "./fragment396";
import type { FragmentToken397 } from "./fragment397";

export const FRAGMENT_398 = gql(`
  fragment Fragment398 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult398 = ResultOf<typeof FRAGMENT_398>;
type FragmentSelf398 = NonNullable<FragmentResult398>;

export type FragmentToken398 =
  | FragmentSelf398["__typename"]
  | FragmentSelf398["typenameHint"] | FragmentToken396 | FragmentToken397;
