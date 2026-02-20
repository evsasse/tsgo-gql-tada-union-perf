import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken602 } from "./fragment602";
import type { FragmentToken603 } from "./fragment603";

export const FRAGMENT_604 = gql(`
  fragment Fragment604 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult604 = ResultOf<typeof FRAGMENT_604>;
type FragmentSelf604 = NonNullable<FragmentResult604>;

export type FragmentToken604 =
  | FragmentSelf604["__typename"]
  | FragmentSelf604["typenameHint"] | FragmentToken602 | FragmentToken603;
