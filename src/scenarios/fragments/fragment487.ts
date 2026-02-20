import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken485 } from "./fragment485";
import type { FragmentToken486 } from "./fragment486";

export const FRAGMENT_487 = gql(`
  fragment Fragment487 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult487 = ResultOf<typeof FRAGMENT_487>;
type FragmentSelf487 = NonNullable<FragmentResult487>;

export type FragmentToken487 =
  | FragmentSelf487["__typename"]
  | FragmentSelf487["typenameHint"] | FragmentToken485 | FragmentToken486;
