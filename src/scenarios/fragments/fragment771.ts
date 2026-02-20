import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken769 } from "./fragment769";
import type { FragmentToken770 } from "./fragment770";

export const FRAGMENT_771 = gql(`
  fragment Fragment771 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult771 = ResultOf<typeof FRAGMENT_771>;
type FragmentSelf771 = NonNullable<FragmentResult771>;

export type FragmentToken771 =
  | FragmentSelf771["__typename"]
  | FragmentSelf771["typenameHint"] | FragmentToken769 | FragmentToken770;
