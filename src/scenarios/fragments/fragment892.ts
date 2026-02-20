import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken890 } from "./fragment890";
import type { FragmentToken891 } from "./fragment891";

export const FRAGMENT_892 = gql(`
  fragment Fragment892 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult892 = ResultOf<typeof FRAGMENT_892>;
type FragmentSelf892 = NonNullable<FragmentResult892>;

export type FragmentToken892 =
  | FragmentSelf892["__typename"]
  | FragmentSelf892["typenameHint"] | FragmentToken890 | FragmentToken891;
