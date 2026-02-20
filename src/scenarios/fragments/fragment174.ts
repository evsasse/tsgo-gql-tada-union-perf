import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken172 } from "./fragment172";
import type { FragmentToken173 } from "./fragment173";

export const FRAGMENT_174 = gql(`
  fragment Fragment174 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult174 = ResultOf<typeof FRAGMENT_174>;
type FragmentSelf174 = NonNullable<FragmentResult174>;

export type FragmentToken174 =
  | FragmentSelf174["__typename"]
  | FragmentSelf174["typenameHint"] | FragmentToken172 | FragmentToken173;
