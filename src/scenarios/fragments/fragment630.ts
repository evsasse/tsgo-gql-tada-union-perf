import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken628 } from "./fragment628";
import type { FragmentToken629 } from "./fragment629";

export const FRAGMENT_630 = gql(`
  fragment Fragment630 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult630 = ResultOf<typeof FRAGMENT_630>;
type FragmentSelf630 = NonNullable<FragmentResult630>;

export type FragmentToken630 =
  | FragmentSelf630["__typename"]
  | FragmentSelf630["typenameHint"] | FragmentToken628 | FragmentToken629;
