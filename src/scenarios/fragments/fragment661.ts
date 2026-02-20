import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken659 } from "./fragment659";
import type { FragmentToken660 } from "./fragment660";

export const FRAGMENT_661 = gql(`
  fragment Fragment661 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult661 = ResultOf<typeof FRAGMENT_661>;
type FragmentSelf661 = NonNullable<FragmentResult661>;

export type FragmentToken661 =
  | FragmentSelf661["__typename"]
  | FragmentSelf661["typenameHint"] | FragmentToken659 | FragmentToken660;
