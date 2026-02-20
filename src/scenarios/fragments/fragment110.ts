import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken108 } from "./fragment108";
import type { FragmentToken109 } from "./fragment109";

export const FRAGMENT_110 = gql(`
  fragment Fragment110 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult110 = ResultOf<typeof FRAGMENT_110>;
type FragmentSelf110 = NonNullable<FragmentResult110>;

export type FragmentToken110 =
  | FragmentSelf110["__typename"]
  | FragmentSelf110["typenameHint"] | FragmentToken108 | FragmentToken109;
