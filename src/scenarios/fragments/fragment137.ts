import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken135 } from "./fragment135";
import type { FragmentToken136 } from "./fragment136";

export const FRAGMENT_137 = gql(`
  fragment Fragment137 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult137 = ResultOf<typeof FRAGMENT_137>;
type FragmentSelf137 = NonNullable<FragmentResult137>;

export type FragmentToken137 =
  | FragmentSelf137["__typename"]
  | FragmentSelf137["typenameHint"] | FragmentToken135 | FragmentToken136;
