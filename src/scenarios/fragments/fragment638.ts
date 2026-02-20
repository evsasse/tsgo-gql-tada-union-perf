import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken636 } from "./fragment636";
import type { FragmentToken637 } from "./fragment637";

export const FRAGMENT_638 = gql(`
  fragment Fragment638 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult638 = ResultOf<typeof FRAGMENT_638>;
type FragmentSelf638 = NonNullable<FragmentResult638>;

export type FragmentToken638 =
  | FragmentSelf638["__typename"]
  | FragmentSelf638["typenameHint"] | FragmentToken636 | FragmentToken637;
