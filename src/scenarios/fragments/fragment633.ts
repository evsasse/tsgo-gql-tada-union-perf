import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken631 } from "./fragment631";
import type { FragmentToken632 } from "./fragment632";

export const FRAGMENT_633 = gql(`
  fragment Fragment633 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult633 = ResultOf<typeof FRAGMENT_633>;
type FragmentSelf633 = NonNullable<FragmentResult633>;

export type FragmentToken633 =
  | FragmentSelf633["__typename"]
  | FragmentSelf633["typenameHint"] | FragmentToken631 | FragmentToken632;
