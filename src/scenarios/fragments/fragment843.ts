import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken841 } from "./fragment841";
import type { FragmentToken842 } from "./fragment842";

export const FRAGMENT_843 = gql(`
  fragment Fragment843 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult843 = ResultOf<typeof FRAGMENT_843>;
type FragmentSelf843 = NonNullable<FragmentResult843>;

export type FragmentToken843 =
  | FragmentSelf843["__typename"]
  | FragmentSelf843["typenameHint"] | FragmentToken841 | FragmentToken842;
