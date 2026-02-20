import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken497 } from "./fragment497";
import type { FragmentToken498 } from "./fragment498";

export const FRAGMENT_499 = gql(`
  fragment Fragment499 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult499 = ResultOf<typeof FRAGMENT_499>;
type FragmentSelf499 = NonNullable<FragmentResult499>;

export type FragmentToken499 =
  | FragmentSelf499["__typename"]
  | FragmentSelf499["typenameHint"] | FragmentToken497 | FragmentToken498;
