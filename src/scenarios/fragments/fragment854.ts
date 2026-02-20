import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken852 } from "./fragment852";
import type { FragmentToken853 } from "./fragment853";

export const FRAGMENT_854 = gql(`
  fragment Fragment854 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult854 = ResultOf<typeof FRAGMENT_854>;
type FragmentSelf854 = NonNullable<FragmentResult854>;

export type FragmentToken854 =
  | FragmentSelf854["__typename"]
  | FragmentSelf854["typenameHint"] | FragmentToken852 | FragmentToken853;
