import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken134 } from "./fragment134";
import type { FragmentToken135 } from "./fragment135";

export const FRAGMENT_136 = gql(`
  fragment Fragment136 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult136 = ResultOf<typeof FRAGMENT_136>;
type FragmentSelf136 = NonNullable<FragmentResult136>;

export type FragmentToken136 =
  | FragmentSelf136["__typename"]
  | FragmentSelf136["typenameHint"] | FragmentToken134 | FragmentToken135;
