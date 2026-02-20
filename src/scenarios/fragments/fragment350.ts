import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken348 } from "./fragment348";
import type { FragmentToken349 } from "./fragment349";

export const FRAGMENT_350 = gql(`
  fragment Fragment350 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult350 = ResultOf<typeof FRAGMENT_350>;
type FragmentSelf350 = NonNullable<FragmentResult350>;

export type FragmentToken350 =
  | FragmentSelf350["__typename"]
  | FragmentSelf350["typenameHint"] | FragmentToken348 | FragmentToken349;
