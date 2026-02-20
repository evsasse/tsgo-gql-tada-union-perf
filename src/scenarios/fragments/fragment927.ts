import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken925 } from "./fragment925";
import type { FragmentToken926 } from "./fragment926";

export const FRAGMENT_927 = gql(`
  fragment Fragment927 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult927 = ResultOf<typeof FRAGMENT_927>;
type FragmentSelf927 = NonNullable<FragmentResult927>;

export type FragmentToken927 =
  | FragmentSelf927["__typename"]
  | FragmentSelf927["typenameHint"] | FragmentToken925 | FragmentToken926;
