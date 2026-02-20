import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken347 } from "./fragment347";
import type { FragmentToken348 } from "./fragment348";

export const FRAGMENT_349 = gql(`
  fragment Fragment349 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult349 = ResultOf<typeof FRAGMENT_349>;
type FragmentSelf349 = NonNullable<FragmentResult349>;

export type FragmentToken349 =
  | FragmentSelf349["__typename"]
  | FragmentSelf349["typenameHint"] | FragmentToken347 | FragmentToken348;
