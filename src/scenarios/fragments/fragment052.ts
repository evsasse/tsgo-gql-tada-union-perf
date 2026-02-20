import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken050 } from "./fragment050";
import type { FragmentToken051 } from "./fragment051";

export const FRAGMENT_052 = gql(`
  fragment Fragment052 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult052 = ResultOf<typeof FRAGMENT_052>;
type FragmentSelf052 = NonNullable<FragmentResult052>;

export type FragmentToken052 =
  | FragmentSelf052["__typename"]
  | FragmentSelf052["typenameHint"] | FragmentToken050 | FragmentToken051;
