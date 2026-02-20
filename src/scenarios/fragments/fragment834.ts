import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken832 } from "./fragment832";
import type { FragmentToken833 } from "./fragment833";

export const FRAGMENT_834 = gql(`
  fragment Fragment834 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult834 = ResultOf<typeof FRAGMENT_834>;
type FragmentSelf834 = NonNullable<FragmentResult834>;

export type FragmentToken834 =
  | FragmentSelf834["__typename"]
  | FragmentSelf834["typenameHint"] | FragmentToken832 | FragmentToken833;
