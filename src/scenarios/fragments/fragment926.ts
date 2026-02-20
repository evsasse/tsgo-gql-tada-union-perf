import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken924 } from "./fragment924";
import type { FragmentToken925 } from "./fragment925";

export const FRAGMENT_926 = gql(`
  fragment Fragment926 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult926 = ResultOf<typeof FRAGMENT_926>;
type FragmentSelf926 = NonNullable<FragmentResult926>;

export type FragmentToken926 =
  | FragmentSelf926["__typename"]
  | FragmentSelf926["typenameHint"] | FragmentToken924 | FragmentToken925;
