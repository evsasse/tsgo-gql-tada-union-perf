import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken007 } from "./fragment007";
import type { FragmentToken008 } from "./fragment008";

export const FRAGMENT_009 = gql(`
  fragment Fragment009 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult009 = ResultOf<typeof FRAGMENT_009>;
type FragmentSelf009 = NonNullable<FragmentResult009>;

export type FragmentToken009 =
  | FragmentSelf009["__typename"]
  | FragmentSelf009["typenameHint"] | FragmentToken007 | FragmentToken008;
