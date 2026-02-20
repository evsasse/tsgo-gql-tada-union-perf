import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken680 } from "./fragment680";
import type { FragmentToken681 } from "./fragment681";

export const FRAGMENT_682 = gql(`
  fragment Fragment682 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult682 = ResultOf<typeof FRAGMENT_682>;
type FragmentSelf682 = NonNullable<FragmentResult682>;

export type FragmentToken682 =
  | FragmentSelf682["__typename"]
  | FragmentSelf682["typenameHint"] | FragmentToken680 | FragmentToken681;
