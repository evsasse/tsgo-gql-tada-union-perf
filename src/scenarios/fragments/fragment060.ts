import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken058 } from "./fragment058";
import type { FragmentToken059 } from "./fragment059";

export const FRAGMENT_060 = gql(`
  fragment Fragment060 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult060 = ResultOf<typeof FRAGMENT_060>;
type FragmentSelf060 = NonNullable<FragmentResult060>;

export type FragmentToken060 =
  | FragmentSelf060["__typename"]
  | FragmentSelf060["typenameHint"] | FragmentToken058 | FragmentToken059;
