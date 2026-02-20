import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken107 } from "./fragment107";
import type { FragmentToken108 } from "./fragment108";

export const FRAGMENT_109 = gql(`
  fragment Fragment109 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult109 = ResultOf<typeof FRAGMENT_109>;
type FragmentSelf109 = NonNullable<FragmentResult109>;

export type FragmentToken109 =
  | FragmentSelf109["__typename"]
  | FragmentSelf109["typenameHint"] | FragmentToken107 | FragmentToken108;
