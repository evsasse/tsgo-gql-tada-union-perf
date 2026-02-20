import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken905 } from "./fragment905";
import type { FragmentToken906 } from "./fragment906";

export const FRAGMENT_907 = gql(`
  fragment Fragment907 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult907 = ResultOf<typeof FRAGMENT_907>;
type FragmentSelf907 = NonNullable<FragmentResult907>;

export type FragmentToken907 =
  | FragmentSelf907["__typename"]
  | FragmentSelf907["typenameHint"] | FragmentToken905 | FragmentToken906;
