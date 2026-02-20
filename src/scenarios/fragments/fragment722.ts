import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken720 } from "./fragment720";
import type { FragmentToken721 } from "./fragment721";

export const FRAGMENT_722 = gql(`
  fragment Fragment722 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult722 = ResultOf<typeof FRAGMENT_722>;
type FragmentSelf722 = NonNullable<FragmentResult722>;

export type FragmentToken722 =
  | FragmentSelf722["__typename"]
  | FragmentSelf722["typenameHint"] | FragmentToken720 | FragmentToken721;
