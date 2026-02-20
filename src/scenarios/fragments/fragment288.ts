import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken286 } from "./fragment286";
import type { FragmentToken287 } from "./fragment287";

export const FRAGMENT_288 = gql(`
  fragment Fragment288 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult288 = ResultOf<typeof FRAGMENT_288>;
type FragmentSelf288 = NonNullable<FragmentResult288>;

export type FragmentToken288 =
  | FragmentSelf288["__typename"]
  | FragmentSelf288["typenameHint"] | FragmentToken286 | FragmentToken287;
