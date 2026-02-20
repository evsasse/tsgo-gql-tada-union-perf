import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken974 } from "./fragment974";
import type { FragmentToken975 } from "./fragment975";

export const FRAGMENT_976 = gql(`
  fragment Fragment976 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult976 = ResultOf<typeof FRAGMENT_976>;
type FragmentSelf976 = NonNullable<FragmentResult976>;

export type FragmentToken976 =
  | FragmentSelf976["__typename"]
  | FragmentSelf976["typenameHint"] | FragmentToken974 | FragmentToken975;
