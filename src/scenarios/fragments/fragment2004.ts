import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2002 } from "./fragment2002";
import type { FragmentToken2003 } from "./fragment2003";

export const FRAGMENT_2004 = gql(`
  fragment Fragment2004 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult2004 = ResultOf<typeof FRAGMENT_2004>;
type FragmentSelf2004 = NonNullable<FragmentResult2004>;

export type FragmentToken2004 =
  | FragmentSelf2004["__typename"]
  | FragmentSelf2004["typenameHint"] | FragmentToken2002 | FragmentToken2003;
