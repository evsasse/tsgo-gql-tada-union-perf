import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken142 } from "./fragment142";
import type { FragmentToken143 } from "./fragment143";

export const FRAGMENT_144 = gql(`
  fragment Fragment144 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult144 = ResultOf<typeof FRAGMENT_144>;
type FragmentSelf144 = NonNullable<FragmentResult144>;

export type FragmentToken144 =
  | FragmentSelf144["__typename"]
  | FragmentSelf144["typenameHint"] | FragmentToken142 | FragmentToken143;
