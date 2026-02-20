import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken840 } from "./fragment840";
import type { FragmentToken841 } from "./fragment841";

export const FRAGMENT_842 = gql(`
  fragment Fragment842 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult842 = ResultOf<typeof FRAGMENT_842>;
type FragmentSelf842 = NonNullable<FragmentResult842>;

export type FragmentToken842 =
  | FragmentSelf842["__typename"]
  | FragmentSelf842["typenameHint"] | FragmentToken840 | FragmentToken841;
