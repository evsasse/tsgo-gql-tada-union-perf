import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken353 } from "./fragment353";
import type { FragmentToken354 } from "./fragment354";

export const FRAGMENT_355 = gql(`
  fragment Fragment355 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult355 = ResultOf<typeof FRAGMENT_355>;
type FragmentSelf355 = NonNullable<FragmentResult355>;

export type FragmentToken355 =
  | FragmentSelf355["__typename"]
  | FragmentSelf355["typenameHint"] | FragmentToken353 | FragmentToken354;
