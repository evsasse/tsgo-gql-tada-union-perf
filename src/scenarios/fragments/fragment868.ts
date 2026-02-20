import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken866 } from "./fragment866";
import type { FragmentToken867 } from "./fragment867";

export const FRAGMENT_868 = gql(`
  fragment Fragment868 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult868 = ResultOf<typeof FRAGMENT_868>;
type FragmentSelf868 = NonNullable<FragmentResult868>;

export type FragmentToken868 =
  | FragmentSelf868["__typename"]
  | FragmentSelf868["typenameHint"] | FragmentToken866 | FragmentToken867;
